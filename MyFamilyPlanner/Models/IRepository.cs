using System.Collections.Generic;

namespace MyFamilyPlanner.Models
{
	public interface IRepository
	{
		void Delete(int id);
		Member Find(int id);
		IList<Member> ListMembers();
		void SaveMember(Member memberToSave);
	}
}