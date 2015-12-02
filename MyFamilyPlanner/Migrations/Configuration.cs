namespace MyFamilyPlanner.Migrations
{
	using Models;
	using System;
	using System.Data.Entity;
	using System.Data.Entity.Migrations;
	using System.Linq;

	internal sealed class Configuration : DbMigrationsConfiguration<MyFamilyPlanner.Models.ApplicationDbContext>
	{
		public Configuration()
		{
			AutomaticMigrationsEnabled = false;
			ContextKey = "MyFamilyPlanner.Models.ApplicationDbContext";
		}

		protected override void Seed(MyFamilyPlanner.Models.ApplicationDbContext context)
		{
			var people = new Person[] {
				new Person {FirstName = "John", LastName="Doe" }
			};
			context.People.AddOrUpdate(p => p.LastName, people);
		}
	}
}
