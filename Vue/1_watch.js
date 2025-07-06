
import {watch,reactive} from "vue";

const state = reactive({
    a:1,
    b:2,
    c:3
})

watch(
    ()=>{
        console.log(state.a + state.b);
        return state.a + state.b;
    },
    (val) => {
        console.log(val*2);
    }
)
setTimeout(()=>{
    state.a++;
    state.b--;
},3000)