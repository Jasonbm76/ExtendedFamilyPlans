namespace MyFamilyPlanner.Migrations
{
	using Microsoft.AspNet.Identity;
	using Microsoft.AspNet.Identity.EntityFramework;
	using Models;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;
	using System.Security.Claims;

	internal sealed class Configuration : DbMigrationsConfiguration<MyFamilyPlanner.Models.ApplicationDbContext>
	{
		public Configuration()
		{
			AutomaticMigrationsEnabled = false;
			ContextKey = "SecureSite.Models.ApplicationDbContext";
		}

		protected override void Seed(MyFamilyPlanner.Models.ApplicationDbContext context)
		{

			var members = new Member[] {
				new Member {
					FirstName = "Jessica",
					LastName ="Sapio",
					Email = "jsapio@ctot.com",
					Phone = "832-296-0149"
				},
				new Member {
					FirstName = "Stacy",
					LastName ="Sapio",
					Email = "ssapio@pphb.com",
					Phone = "832-326-2842"
				}
			};

			// Add or update based off of last name
			context.Members.AddOrUpdate(p => p.LastName, members);

			var userStore = new UserStore<ApplicationUser>(context);
			var userManager = new ApplicationUserManager(userStore);

			// Ensure Stephen
			var user = userManager.FindByName("Stephen.Walther@CoderCamps.com");
			if (user == null)
			{
				// create user
				user = new ApplicationUser
				{
					UserName = "Stephen.Walther@CoderCamps.com",
					Email = "Stephen.Walther@CoderCamps.com"
				};
				userManager.Create(user, "Secret123!");

				// add claims
				userManager.AddClaim(user.Id, new Claim("CanEditProducts", "true"));
				userManager.AddClaim(user.Id, new Claim(ClaimTypes.DateOfBirth, "12/25/1966"));
			}
		}
	}
}
