var GUI = {
    todo: function(id, todotxt){
              if (!todotxt){
                  todotxt = '';
              }
              var element = document.createElement('li');
              element.setAttribute('id', 'todo-' + id);
              element.setAttribute('class','todo-item');
              var text = document.createTextNode(todotxt + ' ');
              var deleteLink = document.createElement('a');
              deleteLink.setAttribute('href', '#');
              deleteLink.setAttribute('onclick', 'todo.remove("' + id + '");');
              deleteLink.appendChild(document.createTextNode('x'));
              element.appendChild(text);
              element.appendChild(deleteLink);
              return element;
          },

}
