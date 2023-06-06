import PropTypes from "prop-types";
import './button.scss'

export default function Button({ title, icon }) {
  return <button className="common-button">
   {title} {icon? icon : ''}
  </button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
};
  