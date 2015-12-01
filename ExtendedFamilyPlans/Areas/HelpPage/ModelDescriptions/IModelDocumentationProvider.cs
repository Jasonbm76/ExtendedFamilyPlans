using System;
using System.Reflection;

namespace ExtendedFamilyPlans.Areas.HelpPage.ModelDescriptions
{
	public interface IModelDocumentationProvider
	{
		string GetDocumentation(MemberInfo member);

		string GetDocumentation(Type type);
	}
}