using System;
using System.Xml.Linq;

namespace TreeMenu.Extensions
{
    public static class XElementExtensionscs
    {
        public static T GetValue<T>(this XElement element) where T: struct
        {
            if (element != null && !string.IsNullOrWhiteSpace(element.Value))
            {
                return (T)Convert.ChangeType(element.Value, typeof(T));
            }

            return default(T);
        }
    }
}