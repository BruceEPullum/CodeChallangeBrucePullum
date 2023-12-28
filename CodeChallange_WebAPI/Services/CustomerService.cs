using System;
namespace CodeChallange
{
    public class CustomerService : ICustomerService
    {
        private readonly IDbService _dbService;

        public CustomerService(IDbService dbService)
        {
            _dbService = dbService;
        }

        public async Task<bool> CreateCustomer(Customer Customer)
        {
            var result =
                await _dbService.EditData(
                    "INSERT INTO \"public\".\"Customers\" " +
                    "(" +
                    "   firstname, " +
                    "   lastname, " +
                    "   email, " +
                    "   createddate " +
                    ") " +
                    "   VALUES " +
                    "(" +
                    "   @firstname, " +
                    "   @lastname, " +
                    "   @email, " +
                    "   current_timestamp " +
                    ")",
                    Customer);
            return true;
        }

        public async Task<Customer> UpdateCustomer(Customer Customer)
        {
            var updateCustomer =
                await _dbService.EditData(
                    "Update \"public\".\"Customers\" " +
                    "SET " +
                    "   firstname = @firstname, " +
                    "   lastname = @lastname, " +
                    "   email = @email, " +
                    "   lastupdated = current_timestamp " +
                    "WHERE id=@id",
                    Customer);
            return Customer;
        }

        public async Task<List<Customer>> GetCustomerList()
        {
            var CustomerList = await _dbService.GetAll<Customer>("SELECT * FROM \"public\".\"Customers\" ", new { });
            return CustomerList;
        }


        public async Task<Customer> GetCustomer(int id)
        {
            var CustomerList = await _dbService.GetAsync<Customer>("SELECT * FROM \"public\".\"Customers\" where id=@id", new { id });
            return CustomerList;
        }

        public async Task<bool> DeleteCustomer(int id)
        {
            var deleteCustomer = await _dbService.EditData("DELETE FROM \"public\".\"Customers\" WHERE id=@id", new { id });
            return true;
        }
    }
}