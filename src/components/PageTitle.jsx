import PropTypes from 'prop-types';

function PageTitle({children, ...rest}) {
  return (
    <h1 className="display-3 py-4 px-4 mx-4" {...rest}>{children}</h1>
  )
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle