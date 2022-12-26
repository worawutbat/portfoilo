import classNames from 'classnames';

import css from './Heading.module.scss';

interface IPropsTyping {
  content?: string;
}

const defaultProps = {
  content: "Hi, I'm Web Developer",
};

function Heading({ content }: IPropsTyping) {
  return (
    <div className="p-16 bg-black rounded-8">
      <div className="w-[fit-content] text-white">
        <h1 className={classNames(css.typing, 'text-24')}>{content}</h1>
      </div>
    </div>
  );
}
Heading.defaultProps = defaultProps;
export default Heading;
