namespace ExtendedFamilyPlans.Migrations
{
	using Models;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;

	internal sealed class Configuration : DbMigrationsConfiguration<ExtendedFamilyPlans.Models.ApplicationDbContext>
	{
		public Configuration()
		{
			AutomaticMigrationsEnabled = false;
			ContextKey = "ExtendedFamilyPlans.Models.ApplicationDbContext";
		}

		protected override void Seed(ExtendedFamilyPlans.Models.ApplicationDbContext context)
		{
			var people = new Person[] {
				new Person {FirstName = "John", LastName="Doe" }
			};
			context.People.AddOrUpdate(p => p.LastName, people);
		}
	}
}
