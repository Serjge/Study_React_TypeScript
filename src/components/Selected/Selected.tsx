import React, {useState} from "react";
import styles from "./Styles.module.css"

type ItemsType = {
    title: string
    value: any
}

type SelectedType = {
    value: any
    onChange: (value: any) => void
    onClick: (on: boolean) => void
    items: ItemsType[]
}

export function Selected(props: SelectedType) {
    const [selected, setSelected] = useState(false)
    const onClickItem = (id: number) => {
        const item = props.items.find(i => i.value === id)
        props.onChange(item && item.title)
        setSelected(false)
    }

    const styleMenu = selected ? styles.menu : styles.menu + ' ' + styles.hidden

    return (<div>
            <div className={styles.wrapper}>
                <div className={styles.title} onClick={() => setSelected(!selected)}>{props.value}</div>
                <div className={styleMenu}>{selected && props.items.map(v => {
                    return <div key={v.value} className={styles.item}
                                onClick={() => onClickItem(v.value)}>{v.title}</div>
                })}</div>
            </div>

        </div>

    )
}
