import classes from "../LoginPage.module.css";
import { motion } from "framer-motion";

const LoginBreak = ({ className }: { className: string }) => {
  return (
    <motion.section className={className}>
      <hr />
      <h4>or</h4>
      <hr />
    </motion.section>
  );
};

export default LoginBreak;
