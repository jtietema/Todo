var GUI = {
    todo: function(id, todotxt){
              if (!todotxt){
                  todotxt = '';
              }
              var element = document.createElement('div');
              element.setAttribute('id', 'todo-' + id);
              element.setAttribute('class','todo-item');
              var text = document.createTextNode(todotxt + ' ');
              var deleteLink = document.createElement('input');
              deleteLink.setAttribute('type', 'checkbox');
              deleteLink.setAttribute('onchange', 'todo.remove("' + id + '");');
              //deleteLink.appendChild(document.createTextNode('x'));
              element.appendChild(deleteLink);
              element.appendChild(text);
              return element;
          },

}
