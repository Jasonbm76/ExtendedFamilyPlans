using MyFamilyPlanner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyFamilyPlanner.API
{
	public class MembersController : ApiController
	{

		private IRepository _repo;

		public MembersController(IRepository repo)
		{
			this._repo = repo;
		}

		public IEnumerable<Member> Get()
		{
			var members = _repo.ListMembers();
			return (members);
		}

		public IHttpActionResult Post(Member member)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(this.ModelState);
			}

			_repo.SaveMember(member);

			return Created("", member);
		}

		public IHttpActionResult Delete(int id)
		{
			_repo.Delete(id);
			return Ok();
		}

		public IHttpActionResult Get(int id)
		{
			var member = _repo.Find(id);
			if (member == null)
			{
				return NotFound();
			}
			return Ok(member);
		}
	}
}
