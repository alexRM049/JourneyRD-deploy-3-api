import { makeAutoObservable, runInAction, } from "mobx";
import { Destiny } from "../models/destiny";
import agent from "../api/agent";
import {v4 as uuid} from 'uuid';

export default class DestinyStore{

    destinies: Destiny[] = [];
    destinyRegistry = new Map<string, Destiny>
    selectedDestiny: Destiny | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this)
    }

    loadDestinies = async() => {
        this.setLoadingInitial(true)
        try {
            const destinies = await agent.Destinies.list();
            const uniqueDestiniesSet = new Set<Destiny>();
                destinies.forEach(destiny => {
                    uniqueDestiniesSet.add(destiny);
                })
                this.destinies = Array.from(uniqueDestiniesSet);
                this.setLoadingInitial(false);
        } catch (error) {
            console.log(error)
            this.setLoadingInitial(false);
        }
    }
       
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    
    selectDestiny = (id: string) => {
        this.selectedDestiny = this.destinies.find(a => a.id === id);
    }
    
    cancelSelectedDestiny = () =>{
        this.selectedDestiny = undefined;
    }
    
    openForm = (id?: string) => {
        id ? this.selectDestiny(id) : this.cancelSelectedDestiny();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createDestiny = async(destiny: Destiny) =>{
        this.loading = true;
        destiny.id = uuid();
        {
            try{
                await agent.Destinies.create(destiny);
                runInAction(() =>{
                    this.destinies.push(destiny);
                    this.selectedDestiny = destiny;
                    this.editMode = false;
                    this.loading = false;
                })
                
            } catch(error){
                console.log(error);
                runInAction(() =>{
                    this.loading = false;
                })
                
            }
        }
    }

    updateDestiny = async(destiny: Destiny) => {
        this.loading = true;
        try {
            {debugger}
            await agent.Destinies.update(destiny);
            runInAction(() =>{
                this.destinies = [...this.destinies.filter(a => a.id !== destiny.id)];
                this.selectedDestiny = destiny;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }

    }

    deleteDestiny = async (id: string) => {
        this.loading = true;
        try{
            await agent.Destinies.delete(id);
            runInAction(() => {
                this.destinies = [...this.destinies.filter(a => a.id !== id)];
                if(this.selectedDestiny?.id === id) this.cancelSelectedDestiny();
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}


