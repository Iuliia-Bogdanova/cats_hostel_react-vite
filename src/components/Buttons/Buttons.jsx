import "./style.scss";

export const IconButton = ({ 
    direction, 
    disable,
    onClick
}) => {
    let cls = 'icon-button';

    if (direction === 'left') cls += ' left';
    if (direction === 'right') cls += ' right';
    if (disable) cls += ' disabled';

    return ( 
        <div className={cls} onClick={onClick} />
    );
}

export const PlayButton = ({
    active,
    disable,
    onClick
}) => {
    let cl = "play-button";

    if (active === 'active') cl += ' active';
    if (disable) cl += " disabled";

    return (
        <div className={cl} onClick={onClick} />
    );
}

export const Indicator = ({
    active,
    onClick,
    index
}) => {
    let clN = "indicator";

    if (active === 'active') clN += ' active';
    
    return (
    <div className={clN} onClick={() => onClick(index)} />
    );
}