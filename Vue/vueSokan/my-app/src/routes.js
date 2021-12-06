import Choose from "./components/Choose.vue"
import Navication from "./components/Navication.vue"
import PriceComponent from "./components/PriceComponent"
import HelloWorld from "./components/HelloWorld"


export const routes = [
    { path : "/price" , component : PriceComponent} ,
    { path : "/choose" , component : Choose} ,
    { path : "/navi" , component : Navication} ,
    {path : "" , component : HelloWorld}

]