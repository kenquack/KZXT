import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { closeModal } from '../../actions/modal_actions';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
};

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    fetchAllProducts: () => dispatch(fetchAllProducts())
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);