import "./Hello.css";
import classNames from "classnames";
import PropTypes from 'prop-types'

export function Hello({name, count, ...rest}) {
    // const name = "General Kenobi";
    // const count = 3;

    // if (name) {
    //     return <h1>Hello {name}!</h1>
    // }
    // return <h1>Nincs kit üdvözölni</h1>

    const out = [];
    for (let i = 0; i < count; i++) {
        out.push(<h1 className={classNames({orange: name === 'React'})} key={i}>Hello {name ? name : "senki"}!</h1>);
    }
    out.push(rest.children);
    return out;
}

Hello.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number
}
