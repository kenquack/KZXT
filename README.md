# Welcome to KZXT
Live link: https://kzxt.herokuapp.com/#/
![](https://user-images.githubusercontent.com/95385874/161304314-607b571f-a2d1-48ed-87e3-4e0dd91ba75b.png)

## Background and overview
KZXT is a clone of NZXT that displays various products and allows users to navigate via search bar or category headers. Users are also able to add these items into their cart with the ability to come back to that same cart at any point in time later.
## Functionality

### Cart
Users can add items to their cart while being able to adjust quantity in the cart itself, as well as being able to delete the cart item itself without having to decrease quantity to 0.
![](https://user-images.githubusercontent.com/95385874/161307477-7bfcae96-28b1-4e22-bb71-347c860c9d14.gif)

```
adjustQuantity(type) {
        const product = this.props.cartItem
        switch(type) {
            case 'increase':
                this.setState({quantity: this.state.quantity + 1});
                this.props.editCartItem(product, this.state.quantity + 1)
                break;
            case 'decrease':
                this.setState({quantity: this.state.quantity - 1});
                this.props.editCartItem(product, this.state.quantity - 1)
                break;
    }
}

```

### Search
Users can search for items by their names or by the category that they fall under.
![](https://user-images.githubusercontent.com/95385874/161308859-08357773-ef3f-413a-b54c-5c410bc097cb.gif)

```
  searchChange(e) {
        this.setState({
            search: e.target.value
        })

        if (e.target.value !== '') {
            let filtered = [];
            const products = this.props.products
            for(let i = 0; i < products.length; i++) {
                if (products[i].name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(products[i])
                } else if (products[i].category.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(products[i])
                }
                if (filtered.length > 2) {
                    break;
                }
            };
            this.setState({
                results: filtered
            })
        } else {
            this.setState({
                results: []
            });
        };
    };
```

## Architecture and technologies
The project uses the following technologies:
* `React` 
* `Redux`
* `Javascript`
* `AWS`
* `Ruby on rails`
* `PostgreSQL`

## Future Features
* Ability to add reviews on each item.
* Search bar results preview first 3 results and a link to view the rest of the results.

