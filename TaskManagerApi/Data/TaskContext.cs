using Microsoft.EntityFrameworkCore;
using Task = TaskManagerApi.Models.Task;

namespace TaskManagerApi.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }
    }
}
