var todo = {
    id : 0,
    add : function(text){
        this.id++;
        this.list[this.id] = text;
        this.persist();
        return GUI.todo(this.id, text);
    },
    list : {},
    remove : function(id){
        delete this.list[id];
        this.persist();
        //var item = document.getElementById('todo-' + id);
        //todolist.removeChild(item);
    },
    persist : function(){
        var jsontxt = JSON.stringify(this.list);
        localStorage.setItem('todo-list', jsontxt);
        localStorage.setItem('todo-id', this.id);
    },
    load : function(){
        var jsonList = localStorage.getItem('todo-list');
        if (jsonList){
            this.list = JSON.parse(jsonList);
        }
        var id = localStorage.getItem('todo-id');
        if (id){
            this.id = id;
        }
    }
}
