import { useState } from "react";
import Modal, { closeModal } from "./index";
import Logger from "../../../modules/Logger";
import { dashboard } from "../../../../config.json";
import AlertMessage from "../AlertMessage";
import { useRouter } from "next/router";

const CreateCommandModal = ({ guild }) => {
  const [name, setName] = useState("");
  const [cmdRes, setCmdRes] = useState("");
  const [response, setResponse] = useState(null);
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        `${dashboard.dashboardUrl}/api/guilds/${guild.id}/commands`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            response: cmdRes,
          }),
        }
      );
      const data = await res.json();

      if (data.status === "success") {
        closeModal("createCommandModal");
        setName("");
        setCmdRes("");
        setResponse("");
        router.push(
          `/dashboard/${guild.id}/commands?message=Successfully Added command`
        );
      }

      setResponse(data);
    } catch (e) {
      Logger.error("create_Command", e);
    }
  }

  return (
    <Modal id="createCommandModal" title="Create command">
      {response?.error ? <AlertMessage message={response?.error} /> : null}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Command name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Command response</label>
          <textarea
            value={cmdRes}
            onChange={(e) => setCmdRes(e.target.value)}
            className="form-input"
          ></textarea>
        </div>
        <div style={{ float: "right", paddingBottom: "1rem" }}>
          <button className="btn btn-primary" type="submit">
            Add command
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateCommandModal;
