using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Destiny
{
    public class List
    {
        public class Query : IRequest<List<Destinies>> { }
        public class Handler : IRequestHandler<Query, List<Destinies>> 
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<List<Destinies>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Destinies.ToListAsync();
            }
        }  
    }
}
