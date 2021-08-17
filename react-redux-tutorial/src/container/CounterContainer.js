import React, {useCallback} from 'react';
import Counter from "../components/Counter";
import {connect, useDispatch, useSelector} from "react-redux";
import counter, {decrease, increase} from "../modules/counter";
import {bindActionCreators} from "redux";

// const CounterContainer = ({number, increase, decrease}) => {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );
// };

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch]);
    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
}

// const mapStateToProps = state => ({
//     number : state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase : () => {
//         dispatch(increase());
//     },
//     decrease : () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// ) (CounterContainer);

// export default connect(
//     state => ({
//         number : state.counter.number,
//     }),
//     dispatch => ({
//         increase : () => dispatch(increase()),
//         decrease : () => dispatch(decrease()),
//     }),
// ) (CounterContainer);

// export default connect(
//     state => ({
//         number : state.counter.number,
//     }),
//     dispatch => bindActionCreators(
//         {
//             increase,
//             decrease
//         },
//         dispatch,
//     )
// ) (CounterContainer);

// export default connect(
//     state => ({
//         number : state.counter.number,
//     }),
//     {
//         increase,
//         decrease
//     }
// ) (CounterContainer);

export default CounterContainer;