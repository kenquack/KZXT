# Welcome to KZXT
Live link: https://kzxt.herokuapp.com/#/
![](https://user-images.githubusercontent.com/95385874/161304314-607b571f-a2d1-48ed-87e3-4e0dd91ba75b.png)

## Background and overview
KZXT is a clone of NZXT that displays various products and allows users to navigate via search bar or category headers. Users are also able to add these items into their cart with the ability to come back to that same cart at any point in time later.
## Functionality

### Cart
Users can add items to their cart while being able to adjust quantity in the cart itself, as well as being able to delete the cart item itself without having to decrease quantity to 0.
![](https://user-images.githubusercontent.com/95385874/165189766-74c7f6c5-9c10-4469-a747-68d7e86007c7.gif)

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
![](https://user-images.githubusercontent.com/95385874/165189703-a004482f-8740-42b9-bac8-6065d826d07f.gif)

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

