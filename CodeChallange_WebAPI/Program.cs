using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using CodeChallange;

namespace CodeChallange
{
    public class Program {
        public static void Main(string[] args) {
            var host = CreateWebHostBuilder(args).Build();
            using (var serviceScope = host.Services.CreateScope()) {
                var services = serviceScope.ServiceProvider;

                try {
                    //DefaultTypeMap.MatchNamesWithUnderscores = true;
                } catch (Exception) {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                }
            }
            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
                WebHost.CreateDefaultBuilder(args)
                    .UseStartup<Startup>().UseWebRoot("UserDoc");
    }
}
