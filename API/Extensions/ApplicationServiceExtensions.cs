using Microsoft.EntityFrameworkCore;
using MediatR;
using AutoMapper;
using FluentValidation;
using Persistence;
using Application.Destiny;
using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices (this IServiceCollection services, IConfiguration config)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v5" });
            });
            services.AddDbContext<DataContext>(opt =>
            {
                 opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(Opt =>
            {
                Opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials()
                          .WithExposedHeaders("WWW-Authenticate")
                          .WithOrigins("http://localhost:3000", "https://localhost:3000");
                });
            });

            services.AddMediatR(typeof(List.Handler).Assembly);
            //services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            //services.AddFluentValidationAutoValidation();
            //services.AddValidatorsFromASsemblyContaining<Create>();

            return services;
        }
    }
}
