import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, {match}) => {
    const currentUser = state.entities.users[state.session.id]
    const product = state.entities.products[match.params.id]
    return {
        currentUser: currentUser,
        product: product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
