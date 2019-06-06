import React from 'react';
import './App.css';

const List = (props) => {
  return(
    <li className='item' onClick={props.onClick}>
      {props.list}
    </li>
  )
}

// App componenta u kojoj smo definisali nas state gde u pocetku imamo praznu listu kojoj mozemo da dodamo vrednosti iz input-a i da obrisemo vrednosti klikom na li koji zelimo da obrisemo
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  // Funkcija koja nam dodaje novi <li> na osnovu vrednosti iz inputa
  addItem = () => {
    // promenljivoj item dodeljujemo vrednosti iz input-a
    const item = document.getElementById('itemInput').value;
    // nakon klika na dugme Add brisemo vrednost iz inputa
    document.getElementById('itemInput').value = '';
    console.log(item);
    // kreiramo novu listu koja je kopija stare liste iz state-a i na taj nacin ne menjamo state direktno
    const newList = this.state.list.slice();
    // dodajemo vrednost iz input-a novoj listi
    newList.push(item);
    // update-ujemo nas state, tako sto staroj listi dodeljujemo vrednost nove liste i na taj nacin aktiviramo re-render-ing onog dela stranice koji se update-ovao
    this.setState({
      list: newList
    })
  }

  // Funkcija koja nam brise <li></li> klikom na njega
  deleteItem = (index) => {
    // kreiramo novu listu koja je kopija stare liste iz state-a i na taj nacin ne menjamo state direktno
    const newList = this.state.list.slice();
    // brisemo <li> iz nove liste
    newList.splice(index, 1);
    // update-ujemo nas state, tako sto staroj listi dodeljujemo vrednost nove liste i na taj nacin aktiviramo re-render-ing onog dela stranice koji se update-ovao
    this.setState({
      list: newList
    })
  }

  render() {
    // kreiramo prazan niz
    let listItem = [];
    // prolazimo kroz nas state i dodajemo svaki item u novo kreirani niz klikom na dugme Add
    this.state.list.forEach((item, i) => {
      listItem.push(<List key={i} list={item} onClick={() => this.deleteItem(i)}/>)
    })
    // ovde pisemo JSX i definisemo izgled html stranice koja ce da se render-uje
    return (
      <div className="App">
        <h1>This is Our Todo App</h1>
        <input className='textInput' id='itemInput' type='text'/>
        <input className='button' type='button' value='Add' onClick={this.addItem}/>
        <ul className='ul'>
          {listItem}
        </ul>      
      </div>
    );
  }
}

export default App;
