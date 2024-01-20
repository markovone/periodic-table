import elems from 'App/data'

export default function ()
{
    const eMain = elems.slice(0, 56).concat(elems.slice(70, 88)).concat(elems.slice(102, 118))
    const eLaAc = elems.slice(56, 70).concat(elems.slice(88, 102))

    return (
        <div className="periodic-table f-r-wrap">

            { eMain.map(e => (
                <div className="element f-c">
                    <div className="top">
                        { e.number }
                    </div>
                    <div className="symbol">
                        { e.symbol }
                    </div>
                </div>
            ))}

        </div>
    )
}