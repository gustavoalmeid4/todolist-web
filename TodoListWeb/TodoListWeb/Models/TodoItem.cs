using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoListWeb.Models
{
    public class TodoItem 
    {

        public int Id { get; set; }
        public string todoName { get; set; }
        public bool? IsComplete { get; set; }


    }
}
