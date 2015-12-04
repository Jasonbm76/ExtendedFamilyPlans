using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyFamilyPlanner.Models
{
	public class EFRepository : IRepository
	{

		private ApplicationDbContext _db = new ApplicationDbContext();

		public IList<Member> ListMembers()
		{
			return _db.Members.ToList();
		}

		public void SaveMember(Member memberToSave)
		{
			if (memberToSave.Id == 0)
			{
				_db.Members.Add(memberToSave);
				_db.SaveChanges();
			}
			else
			{
				var original = this.Find(memberToSave.Id);
				original.FirstName = memberToSave.FirstName;
				original.LastName = memberToSave.LastName;
				original.Email = memberToSave.Email;
				original.Phone = memberToSave.Phone;
				_db.SaveChanges();
			}

		}

		public Member Find(int id)
		{
			return _db.Members.Find(id);
		}

		public void Delete(int id)
		{
			var member = this.Find(id);
			_db.Members.Remove(member);
			_db.SaveChanges();
		}
	}
}