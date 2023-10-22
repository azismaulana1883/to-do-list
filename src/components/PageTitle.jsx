import style from '../styles/modules/title.module.scss'

import PropTypes from 'prop-types';

function PageTitle({children, ...rest}) {
  return (
    <p className={style.title} {...rest}>{children}</p>
  )
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle