import { SEARCH_LEAFS } from './../actions/node';

const list = [
    {'id':1, 'parent':'World', 'child': 'Europe'},
    {'id':2, 'parent':'World', 'child': 'North America'},
    {'id':3, 'parent':'Europe', 'child': 'France'},
    {'id':4, 'parent':'Europe', 'child': 'Germany'},
    {'id':5,'parent':'France', 'child': 'Paris'},
    {'id':6, 'parent':'Germany', 'child': 'Berlin'},
    {'id':7, 'parent':'North America', 'child': 'United States'},
    {'id':8, 'parent':'North America', 'child': 'Canada'},
    {'id':9, 'parent':'United States', 'child': 'New York'},
    {'id':10, 'parent':'United States', 'child': 'Washington'},
    {'id':11, 'parent':'New York', 'child': 'New York City'},
    {'id':12, 'parent':'Washington', 'child': 'Redmond'}
];

const SEARCH = (state = [], action) => {
    switch(action.type){
        case 'SEARCH':
            return findLeafs(action.query);
        default:
            return state;
    }
};

export default SEARCH;

const findLeafs = (query) => {
    debugger;
    let parents = list.filter((node) => 
        node.parent.toLowerCase() === query.toLowerCase()       
    )
    if(parents.length == 0){
        return {nodes:[{
            id:20, parent:'', child:'Node not found'
        }]};
    }
    var nodes =[];
    for(let i =0; i < parents.length; i++){
        let children = list.filter((node) => 
            node.parent.toLowerCase() === parents[i].child.toLowerCase() 
        );
        if(children.length === 0){
            nodes.push(parents[i])
        }else{
            for (let j = 0; j < children.length; j++){
                var exists = parents.filter((node)=>
                    children[j].id === node.id
                )
                if(exists.length === 0){
                    parents.push(children[j])
                }
            }
        }
        
    }
    return{nodes};
}