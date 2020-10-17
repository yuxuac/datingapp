using System;
using System.ComponentModel.DataAnnotations;

namespace API.Extensions
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = false)]
    public class ValidateUser : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            string Username = (string)validationContext.ObjectType.GetProperty("Username").GetValue(validationContext.ObjectInstance, null);
            string Email = (string)validationContext.ObjectType.GetProperty("Email").GetValue(validationContext.ObjectInstance, null);

            if (string.IsNullOrEmpty(Username) && string.IsNullOrEmpty(Email))
                return new ValidationResult("Either Username or Password is required.");

            return ValidationResult.Success;
        }
    }
}