import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Filter from './filter';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
        filter: state.ui.filters
    }
};

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);