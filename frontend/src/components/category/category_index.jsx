import React from 'react';

export default class CategoryIndex extends React.Component {
    render() {
        return (
            <div>
                <p>Algebra</p>
                <ul>
                    <li><button>Lesson 1</button></li>
                    <li><button>Lesson 2</button></li>
                    <li><button>Lesson 3</button></li>
                    <li><button>Lesson 4</button></li>
                    <li><button>Lesson 5</button></li>
                    <li><button>Lesson 6</button></li>
                </ul>
                <p>Geometry</p>
                <ul>
                    <li><button>Lesson 1</button></li>
                    <li><button>Lesson 2</button></li>
                    <li><button>Lesson 3</button></li>
                    <li><button>Lesson 4</button></li>
                    <li><button>Lesson 5</button></li>
                    <li><button>Lesson 6</button></li>
                </ul>
            </div>
        )
    }
}