import classes from './Form.module.scss'

export const Form = () => {
    return (
        <div className={classes.wrapper}>
            <form action="#">
                <label>
                    <input type="text" className={classes.inp}/>
                    <button className={classes.btn}></button>
                </label>
            </form>
        </div>
    )
}