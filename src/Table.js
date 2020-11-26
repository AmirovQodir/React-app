import React, { Component, useEffect } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.job}</td>
                <td>{row.name}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {characterData, removeCharacter, addCharacter} = props;

    useEffect(() => {
        setTimeout(() => {
            addCharacter({name: 'name11', job: 'job11'})
        }, 3000)
    }, []);
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }

// class Table extends Component {
//     render() {
//         const { characterData } = this.props
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

export default Table