using System;
namespace CodeChallange
{
    public interface ICustomerService
    {
        Task<bool> CreateCustomer(Customer customer);
        Task<List<Customer>> GetCustomerList();
        Task<Customer> GetCustomer(int id);
        Task<Customer> UpdateCustomer(Customer customer);
        Task<bool> DeleteCustomer(int key);
    }
}