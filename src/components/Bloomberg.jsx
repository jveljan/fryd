export default (props) => {
    const arr = [...Array(Number(props.lines)).keys()]
    return <div class="box">
        {
            arr.map(x => <div class="bloomberg">Bloomberg template {x}</div>)
        }
    </div>
}