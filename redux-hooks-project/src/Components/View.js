export function View() {
    return (
        <div className="container">
            <div className="row">
                <h1> clothes </h1>
            </div>
            <div className="row">
    
                <div className="two columns">
                    <button className="button-primary">Add cloth</button>
                </div>
            </div>
            <div className="row">
                <table class="u-full-width">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dave Gamache</td>
                            <td>dave@gmail.com</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}