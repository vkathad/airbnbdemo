import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { json, redirect } from "react-router-dom";
import * as yup from "yup";
import {  post } from "../libs/http-hydrate";
import { modalActions } from "../store/modal";
import { useDispatch } from "react-redux";


export default function LoginForm(props) {
    //isregister
    const dispatch = useDispatch();
    
    const validationSchema = yup.object({
        email: yup.string().required("Email is required"),
        password: yup.string().min(5).required("password is required"),
         remember: yup.string().required("Please accept first"),
         name: props.isregister ? yup.string().required("Please name first") : '',
         
        // profile: yup.mixed().test(1000, "File Size is too large", value => value.size <= FILE_SIZE) .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(['image/*']) ),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
            profile: "",
            remember:false,

            method: "post",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            
            const ApiUrl = props.isregister ? 'auth/register' : 'auth/login';
            
            const response =  post(ApiUrl,values);
            
            response.then(function (body) {
                //  alert(body);
                    if (body.status === false || body.status === 401) {
                        alert(body.errors)
                        return response;
                    }
                    dispatch(modalActions.hideModal());
                    return redirect('/test');
                    
                })
                .catch(function (err) {
                    alert(err.message);
                    throw json({ message: 'Could not authenticate user.' }, { status: 500 });      
                });

           

            // if (!response.ok) {
            //     throw json({ message: 'Could not authenticate user.' }, { status: 500 });
            // }

           
            // const token = resData.token;
            // return redirect('/test');
        },
    });


    return (
        <>
            <form method="post" onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <div className="space-y-6 pb-4 sm:pb-6 lg:px-0 xl:pb-8">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Sign in to our platform
                    </h3>
                    { props.isregister && <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Name" value="Your Name" />
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </div>}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            placeholder="name@company.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" name="password" type="password" required={true} value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>

                    {/* <div>
                        <div className="mb-2 block">
                            <Label htmlFor="profile" value="Profile" />
                        </div>
                        <input type="file" id="profile" name="profile" value={formik.values.profile}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        {formik.errors.profile ? <div>{formik.errors.profile}</div> : null}
                    </div> */}

                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" name="remember" value={formik.remember} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                            <Label htmlFor="remember">Remember me</Label>
                            {formik.errors.remember ? <div>{formik.errors.remember}</div> : null}
                        </div>
                        
                    </div>
                    <div className="w-full ">
                        <Button type='submit' className="bg-pink-600 w-full"  >{props.isregister ? 'Register' : 'Login'}</Button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}