// 1.
const App = () => (
    <Amount>
      {amount => (
        <div>
          <Pound amount={amount} />
          <Euro amount={amount} />
        </div>
      )}
    </Amount>
  );
   
  class Amount extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        amount: 0,
      };
    }
   
    onIncrement = () => {
      this.setState(state => ({ amount: state.amount + 1 }));
    };
   
    onDecrement = () => {
      this.setState(state => ({ amount: state.amount - 1 }));
    };
   
    render() {
      return (
        <div>
          <span>US Dollar: {this.state.amount} </span>
   
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
   
          {this.props.children(this.state.amount)}
        </div>
      );
    }
  }


//   2.
const App = () => (
    <Amount
      renderAmountOne={amount => (
        <div>
          <h2>My one Amount</h2>
          <Pound amount={amount} />
          <Euro amount={amount} />
        </div>
      )}
      renderAmountTwo={amount => (
        <div>
          <h2>My other Amount</h2>
          <Pound amount={amount} />
          <Euro amount={amount} />
        </div>
      )}
    />
  );
   
  class Amount extends Component {
    ...
   
    render() {
      return (
        <div>
          <span>US Dollar: {this.state.amount} </span>
   
          {this.props.renderAmountTwo(this.state.amount)}
   
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
   
          {this.props.renderAmountOne(this.state.amount)}
        </div>
      );
    }
  }




//   3.       RENDER PROP COMPONENT ALTERNATIVE: HIGHER-ORDER COMPONENT
// I.
const App = () => <CurrenciesWithAmount />;

// II.
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
 
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

const CurrenciesWithAmount = withAmount([Euro, Pound]);

// III.
const withAmount = currencyComponents =>
  class Amount extends Component {
    constructor(props) {
      super(props);
 
      this.state = {
        amount: 0,
      };
    }
 
    onIncrement = () => {
      this.setState(state => ({ amount: state.amount + 1 }));
    };
 
    onDecrement = () => {
      this.setState(state => ({ amount: state.amount - 1 }));
    };
 
    render() {
      return (
        <div>
          <span>US Dollar: {this.state.amount} </span>
 
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
 
          {currencyComponents.map(CurrencyComponent => (
            <CurrencyComponent amount={this.state.amount} />
          ))}
        </div>
      );
    }
  };