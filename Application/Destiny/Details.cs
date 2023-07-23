using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Destiny
{
    public class Details
    {
        public class Query : IRequest<Destinies>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Destinies> 
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task<Destinies> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Destinies.FindAsync(request.Id);
            }
        }
    }
}
