import * as Yup from "yup";

const getUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required()
            })
        }
    }
}

const addUser = {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string().min(2).max(20),
        email: Yup.string().email(),
        city: Yup.string(),
        country: Yup.string(),
      }),
    },
  },
};

const updateUser = {
  schema: {
    params: {
        yupSchema: Yup.object().shape({
            id: Yup.number().required()
        })
    },
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email(),
        city: Yup.string(),
        country: Yup.string(),
      }),
    },
  },
};

const removeUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required()
            })
        }
    }
}

export default {
    getUser,
    addUser,
    updateUser,
    removeUser
}