namespace ITBL.Services
{
    public interface IBaseService<T>
    {

        public Task<T> Add(T entity);
        public Task<T> Update(T entity);
        public Task<T> Delete(T entity);
        public Task<T> GetById(int id);
        public Task<IEnumerable<T>> GetAll();

    }
}
