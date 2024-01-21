import react, {Component} from 'react'
// imports the react
export default class Nav extends Component{
    render(){
        return(
            //inputs the nav
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}