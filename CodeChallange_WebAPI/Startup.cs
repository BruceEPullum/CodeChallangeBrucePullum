using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using System.IO;
using CodeChallange;

namespace CodeChallange
{
    public class Startup {
        public Startup(IConfiguration configuration, Microsoft.Extensions.Hosting.IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        public void Configure(IApplicationBuilder app, Microsoft.Extensions.Hosting.IHostingEnvironment env, ILoggerFactory loggerFactory) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            } else {
                app.UseHsts();
            }

            app.UseFileServer(new FileServerOptions() {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), @"UserDoc")),
                RequestPath = new PathString("/UserDoc")
            });

            app.UseCors("obCORS");
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            // Add this code to Configure method in Startup.cs, before app.UseEndpoints
            app.UseCors("AllowAllOrigins");

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });

            if (env.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseMvc();
        }

        public void ConfigureServices(IServiceCollection services) {

            services.AddCors(setup => {
                setup.AddPolicy("obCORS", config => {
                    config.AllowAnyHeader();
                    config.AllowAnyOrigin();
                    config.AllowAnyMethod();
                });
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });

         


            services.AddHttpContextAccessor();


            services.AddControllers();

            // Register Repositories


            // Register Services
            services.AddScoped<IDbService, DbService>();
            services.AddScoped<ICustomerService, CustomerService>();


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();


            services.AddCors(options => {
                options.AddPolicy("CorsPolicy", builder => {
                    builder.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowCredentials();
                });
            });

          }
    }
}