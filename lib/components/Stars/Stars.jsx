import React from 'react';

const parentStyles = {
  overflow: 'hidden',
  position: 'relative'
};

const defaultStyles = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left'
};

const getHalfStarStyles = (color, uniqueness) => {
  return `
    .react-stars-${uniqueness}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`;
};

export default class ReactStars extends React.Component {
    static defaultProps = {
        half: true,
        edit: true,
        count: 5,
        size: 15,
        char: '★',
        color1: 'gray',
        color2: '#ffd700'
    };

    constructor(props) {
        super(props);

        this.state = {
          uniqueness: (Math.random() + '').replace('.', ''),
          value: props.value || 0,
          stars: []
        };

        this.state.config = {
          count: props.count,
          size: props.size,
          char: props.char,
          // default color of inactive star
          color1: props.color1,
          // color of an active star
          color2: props.color2,
          edit: props.edit
        };
    }

    componentDidMount() {
        this.setState({
          stars: this.getStars(this.state.value)
      });
    }

    mouseOver(event) {
        event.preventDefault();
    }

    mouseMove(event) {
        event.preventDefault();
    }

    mouseLeave(event) {
        event.preventDefault();
    }

    clicked(event) {
        event.preventDefault();

        const { config } = this.state;
        if(!config.edit) {
            return;
        }

        let index = Number(event.target.getAttribute('data-index'));
        let value = index = index + 1;

        this.setState({
          value: value,
          stars: this.getStars(index)
        });

        if (this.props.onChange) {
          this.props.onChange(value);
        }
    }

    getRate() {
        let stars;

        if(this.state.config.half) {
          stars = Math.floor(this.state.value);
        } else {
          stars = Math.round(this.state.value);
        }

        return stars;
    }

    getStars(activeCount) {
        if(typeof activeCount === 'undefined') {
          activeCount = this.getRate();
        }

        let stars = [];
        for(let i = 0; i < this.state.config.count; i++) {
          stars.push({
            active: i <= activeCount - 1
          });
        }

        return stars;
    }

    renderStars() {
        const { halfStar, stars, uniqueness } = this.state;
        const { color1, color2, size, char, half } = this.state.config;
        return stars.map((star, i) => {
          let starClass = '';
          if(half && !halfStar.hidden && halfStar.at === i) {
            starClass = `react-stars-${uniqueness}`;
          }

          const style = Object.assign({}, defaultStyles, {
            color: star.active ? color2 : color1,
            fontSize: `${size}px`
          });

          return (
            <span
              className={starClass}
              style={style}
              key={i}
              data-index={i}
              data-forhalf={char}
              onMouseOver={this.mouseOver.bind(this)}
              onMouseMove={this.mouseOver.bind(this)}
              onMouseLeave={this.mouseLeave.bind(this)}
              onClick={this.clicked.bind(this)}>
              {char}
            </span>
        );
      });
    }

    render() {
        const { className } = this.props;
        return (
          <div className={className} style={parentStyles}>
            {this.state.config.half ?
            this.renderHalfStarStyleElement() : ''}
            {this.renderStars()}
          </div>
        );
    }
}
