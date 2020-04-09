const $block = document.querySelector('.block');

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => {
        for(const item in users) {
            const $users = document.createElement('div');
            $users.classList.add('username');
            $block.append( $users);
            $users.append(users[item].name);

            $users.addEventListener('click', () => {
                fetch('https://jsonplaceholder.typicode.com/users/')
                    .then(response => response.json())
                    .then(user => {
                        const $userInfo = document.createElement('span');
                        $userInfo.classList.add('userdata');
                        $users.after($userInfo);
                        $userInfo.innerText = `lives in ${user[item].address.city},
                                                    works at ${user[item].company.name},
                                                    phone: ${user[item].phone}`;
                    });
            });
        }
    });